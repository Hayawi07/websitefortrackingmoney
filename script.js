document.addEventListener('DOMContentLoaded', function () {
    const totalAmount = 4000;
    const payments = [100, 100]; // Zaktualizowana lista wpłat
    const paidAmount = payments.reduce((acc, payment) => acc + payment, 0);
    const remainingAmount = totalAmount - paidAmount;
    const progressPercent = ((totalAmount - remainingAmount) / totalAmount) * 100;

    document.getElementById('remaining-amount').textContent = `${remainingAmount} zł`;
    document.getElementById('paid-amount').textContent = `${paidAmount} zł`;

    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = `${progressPercent}%`;
    progressBar.setAttribute('data-progress', `${Math.round(progressPercent)}%`);
});
