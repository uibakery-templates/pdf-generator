const doc = new jspdf.jsPDF();

doc.autoTable({
  head: [['ID', 'Name', 'Email', 'Bio']],
  body: {{actions.loadUsers.data}}.map(({ id, fullName, email, bio }) => ([id, fullName, email, bio])),
});

doc.save('users.pdf');