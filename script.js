document.addEventListener('DOMContentLoaded', () => {
    // 1. تحديث سنة حقوق النشر تلقائياً في الفوتر
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. تفعيل تأثير إشعار النسخ التلقائي أو عند التفاعل مع الروابط إن لزم الأمر
    const toast = document.getElementById('copy-toast');
    
    // دالة مساعدة لإظهار إشعار مؤقت
    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // إمكانية نسخ رابط الموقع عند الضغط على الشعار أو أي عنصر مخصص
    const logoEl = document.querySelector('.logo');
    if (logoEl) {
        logoEl.style.cursor = 'pointer';
        logoEl.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href).then(() => {
                showToast('تم نسخ رابط الموقع ✓');
            }).catch(err => {
                console.error('فشل النسخ: ', err);
            });
        });
    }
});

