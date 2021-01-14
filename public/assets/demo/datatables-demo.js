// Call the dataTables jQuery plugin
// $(document).ready(function() {
//   $('#dataTable').DataTable();
// });

$(document).ready(function () {
  $('#datatable').DataTable({
    "language": {
      "lengthMenu": "Hiển thị _MENU_ dòng mỗi trang",
      "zeroRecords": "Không tìm thấy kết quả",
      "info": "Trang _PAGE_ trên _PAGES_",
      "infoEmpty": "Không tìm thấy kết quả",
      "infoFiltered": "(Lọc từ _MAX_ kết quả)",
      "search": "Tìm kiếm:",
      "oPaginate": {
        "sPrevious": "Trước",
        "sNext": "Sau",
      }
    },
    "columnDefs": [{ targets: 'no-sort', orderable: false }]
  });
  //$('.dataTables_length').addClass('bs-select');
});
