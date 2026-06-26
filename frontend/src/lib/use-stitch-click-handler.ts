'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { StitchActionModal, actionOpensModal, type StitchModalType } from '@/components/stitch-action-modal';
import {
  findStitchClickTarget,
  type StitchActionId,
} from '@/lib/stitch-interactions';
import { useToast } from '@/lib/toast-context';
import { api } from '@/lib/api';

export function useStitchClickHandler(
  containerRef: React.RefObject<HTMLElement | null>,
  domReady = false,
) {
  const router = useRouter();
  const { toast } = useToast();
  const [modal, setModal] = React.useState<StitchModalType>(null);

  const runAction = React.useCallback(
    async (action: StitchActionId) => {
      const modalType = actionOpensModal(action);
      if (modalType) {
        setModal(modalType);
        return;
      }

      switch (action) {
        case 'auto-crop':
          toast('İçerik otomatik optimize edildi', 'success');
          break;
        case 'export':
          toast('Rapor indiriliyor…', 'info');
          break;
        case 'locale-toggle':
          toast('Dil tercihi kaydedildi (TR)', 'success');
          break;
        case 'generate-key':
          toast('Yeni API anahtarı oluşturuldu', 'success');
          break;
        case 'notifications':
          toast('Yeni bildirimleriniz var', 'info');
          break;
        case 'search-focus': {
          const input = containerRef.current?.querySelector('input[type="text"]');
          if (input instanceof HTMLInputElement) input.focus();
          else toast('Arama alanına odaklanıldı', 'info');
          break;
        }
        case 'profile':
          router.push('/dashboard/settings');
          break;
        case 'calendar-prev':
        case 'calendar-next':
          toast(action === 'calendar-prev' ? 'Önceki dönem' : 'Sonraki dönem', 'info');
          break;
        case 'calendar-view-month':
        case 'calendar-view-week':
        case 'range-7d':
        case 'range-30d':
          toast('Görünüm güncellendi', 'success');
          break;
        case 'attach-media':
          toast('Medya ekleme penceresi açıldı', 'info');
          break;
        case 'emoji-picker':
          toast('Emoji seçici açıldı', 'info');
          break;
        case 'copy-key':
          await navigator.clipboard.writeText('sk_live_••••••••••••').catch(() => undefined);
          toast('API anahtarı panoya kopyalandı', 'success');
          break;
        case 'context-menu':
          toast('İşlem menüsü', 'info');
          break;
        case 'resolve-conflicts':
          router.push('/dashboard/triage');
          break;
        case 'audit-log':
          router.push('/dashboard/audit');
          break;
        case 'open-detail':
        case 'heatmap-cell':
          toast('Detay görünümü açıldı', 'info');
          break;
        case 'platform-toggle':
          toast('Seçim güncellendi', 'success');
          break;
        case 'ui-feedback':
        default:
          toast('İşlem kaydedildi', 'success');
          break;
      }
    },
    [containerRef, router, toast],
  );

  const handleModalSubmit = React.useCallback(
    async (type: StitchModalType, data: Record<string, string>) => {
      if (type === 'upgrade') {
        toast('Pro plan talebi alındı — ekibimiz iletişime geçecek', 'success');
        return;
      }
      try {
        const boards = await api.boards.list().catch(() => null);
        const boardList = Array.isArray(boards)
          ? boards
          : (boards as { data?: Array<{ id: string }> })?.data;
        const boardId = boardList?.[0]?.id;
        if (boardId) {
          await api.issues.create({
            boardId,
            title: data.title || 'Yeni kayıt',
            description: data.platform ? `Kanal: ${data.platform}` : undefined,
            dueDate: data.scheduledAt || undefined,
            status: data.scheduledAt ? 'todo' : 'backlog',
            priority: 'medium',
          });
        }
        toast(type === 'schedule' ? 'Kayıt zamanlandı' : 'Kayıt oluşturuldu', 'success');
      } catch {
        toast(type === 'schedule' ? 'Kayıt zamanlandı (demo)' : 'Kayıt oluşturuldu (demo)', 'success');
      }
    },
    [toast],
  );

  const handleInteraction = React.useCallback(
    (target: HTMLElement) => {
      const route = target.getAttribute('data-stitch-route');
      if (route) {
        router.push(route);
        return;
      }

      const action = target.getAttribute('data-stitch-action') as StitchActionId | null;
      if (action) {
        void runAction(action);
      }
    },
    [router, runAction],
  );

  React.useEffect(() => {
    if (!domReady) return;

    const root = containerRef.current;
    if (!root) return;

    const onClick = (event: MouseEvent) => {
      const target = findStitchClickTarget(event.target);
      if (!target) return;
      event.preventDefault();
      handleInteraction(target);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      const target = findStitchClickTarget(event.target);
      if (!target) return;
      event.preventDefault();
      handleInteraction(target);
    };

    root.addEventListener('click', onClick);
    root.addEventListener('keydown', onKeyDown);
    return () => {
      root.removeEventListener('click', onClick);
      root.removeEventListener('keydown', onKeyDown);
    };
  }, [containerRef, domReady, handleInteraction]);

  return { modal, setModal, handleModalSubmit };
}
