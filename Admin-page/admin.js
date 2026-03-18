// ===== admin.js =====

// ===== Chart =====
const ctx = document.getElementById('salesChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو'],
    datasets: [{
      label: 'المبيعات (ج)',
      data: [12000, 19000, 15000, 25000, 22000, 30000, 45200],
      borderColor: '#ff6200',
      backgroundColor: 'rgba(255, 98, 0, 0.1)',
      borderWidth: 3,
      pointBackgroundColor: '#ff6200',
      pointRadius: 5,
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: false, grid: { color: '#f3f4f6' } },
      x: { grid: { display: false } }
    }
  }
});

// ===== Search في الجدول =====
document.getElementById('searchInput').addEventListener('input', function() {
  const value = this.value.toLowerCase();
  const rows = document.querySelectorAll('#ordersTableBody tr');
  rows.forEach(row => {
    row.style.display = row.textContent.toLowerCase().includes(value) ? '' : 'none';
  });
});

// ===== حذف صف =====
function deleteRow(btn) {
  if (confirm('هل تريد حذف هذا الطلب؟')) {
    btn.closest('tr').remove();
  }
}