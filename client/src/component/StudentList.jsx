
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { deleteStudent, getAllStudent } from "../apiRequest/apiRequest";

const StudentList = () => {
  const [student, setStudent] = useState([]);
  const [change, setChange] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await getAllStudent();
      setStudent(res);
    })();
  }, [change]);

  const onDelete = async (id) => {
    const res = await deleteStudent(id);

    if (res) {
      toast.success("Delete Success");
      setChange(new Date().getTime());
    } else {
      toast.success("Delete Failed");
    }
  };
  if (student === null) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Student List</h1>
          <div className="table-responsive">
            <table className="table-bordered">
              <thead className="bg-info">
                <tr className="text-center">
                  <th className="p-2">First Name</th>
                  <th className="p-2">Last Name</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">DOB</th>
                  <th className="p-2">Phone</th>
                  <th className="p-2">Address</th>
                  <th className="p-2">Gender</th>
                  <th className="p-2">AdmissionDate</th>
                  <th className="p-2">Nationality</th>
                  <th className="p-2">Courses</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {student &&
                  student.map((item, i) => (
                    <tr key={i}>
                      <td className="p-1 py-3">{item.firstName}</td>
                      <td className="p-1 py-3">{item.lastName}</td>
                      <td className="p-1 py-3">{item.email}</td>
                      <td className="p-1 py-3">
                        {new Date(item.dateOfBirth).toLocaleDateString()}
                      </td>
                      <td className="p-1 py-3">{item.phone}</td>
                      <td className="p-1 py-3">{item.address}</td>
                      <td className="p-1 py-3">{item.gender}</td>
                      <td className="p-1 py-3">
                        {new Date(item.admissionDate).toLocaleDateString()}
                      </td>
                      <td className="p-1 py-3">{item.nationality}</td>
                      <td className="p-1 py-3">{item.courses}</td>
                      <td>
                        <button
                          onClick={() => {
                            onDelete(item._id);
                          }}
                          className="btn mx-2 btn-danger"
                        >
                          Delete
                        </button>
                        <Link
                          to={"/save?id=" + item._id}
                          className="btn mx-2 btn-success"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default StudentList;
