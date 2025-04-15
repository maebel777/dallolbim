document.getElementById('loginForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const role = document.getElementById('role').value;
  if (role === 'contractor') location.href = 'dashboard-contractor.html';
  else if (role === 'developer') location.href = 'dashboard-dev.html';
  else location.href = 'dashboard-gov.html';
});
