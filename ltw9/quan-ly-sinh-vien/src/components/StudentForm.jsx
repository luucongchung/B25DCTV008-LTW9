import { useState } from "react";

export default function StudentForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", email: "", major: "CNTT" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim() || form.name.trim().length < 3) {
      errs.name = "Họ tên phải từ 3 ký tự trở lên";
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errs.email = "Email không đúng định dạng";
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    onAdd({ ...form, id: Date.now().toString() });
    setForm({ name: "", email: "", major: "CNTT" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Thêm sinh viên</h3>
      <div>
        <label>Họ tên: </label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nhập họ tên..."
        />
        {errors.name && <p style={{ color: "red", fontSize: "12px" }}>{errors.name}</p>}
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>Email: </label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Nhập email..."
        />
        {errors.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>}
      </div>
      <div style={{ marginTop: "10px" }}>
        <label>Ngành: </label>
        <select name="major" value={form.major} onChange={handleChange}>
          <option value="CNTT">CNTT</option>
          <option value="ATTT">ATTT</option>
          <option value="ĐTVT">ĐTVT</option>
        </select>
      </div>
      <button type="submit" style={{ marginTop: "10px" }}>Thêm</button>
    </form>
  );
}