import { IndividualConfig } from 'ngx-toastr';

export const toastrConfig: Partial<IndividualConfig> = {
  closeButton: true,                  // Показывать кнопку закрытия
  timeOut: 5_000,                     // Время жизни уведомления в миллисекундах
  extendedTimeOut: 1_000,             // Дополнительное время при наведении мыши
  disableTimeOut: false,              // Тайм-аут включён
  easing: 'ease-in',                  // Ускорение анимации
  easeTime: 300,                      // Время анимации в миллисекундах
  enableHtml: true,                   // Разрешить HTML в сообщении
  newestOnTop: true,                  // Новые уведомления размещаются сверху
  progressBar: true,                  // Показывать прогресс-бар
  progressAnimation: 'decreasing',    // Убывающая анимация прогресс-бара
  toastClass: 'ngx-toastr',           // CSS класс для тостов
  positionClass: 'toast-top-right',   // Позиция уведомления на экране
  titleClass: 'toast-title',          // CSS класс для заголовков
  messageClass: 'toast-message',      // CSS класс для сообщений
  tapToDismiss: true,                 // Закрытие уведомления при клике
  onActivateTick: false,              // Не требуется ручное обновление в ChangeDetectorRef
};
