export function toggleDialog(dialogId: string, action: 'open' | 'close') {
  const dialog = document.querySelector(dialogId) as any;
  if (dialog) {
    action === 'open' ? dialog.openDialog() : dialog.closeDialog();
  }
}
