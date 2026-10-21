export default function StudentList({ items, onRemove }) {
  if (!items || items.length === 0) {
    return <p>Chưa có sinh viên</p>;
  }

  return (
    <ul>
      {items.map((sv) => (
        <li key={sv.id} style={{ marginBottom: "8px" }}>
          <b>{sv.name}</b> – {sv.email} – <i>{sv.major}</i>{" "}
          <button onClick={() => onRemove(sv.id)} style={{ marginLeft: "10px" }}>
            Xóa
          </button>
        </li>
      ))}
    </ul>
  );
}