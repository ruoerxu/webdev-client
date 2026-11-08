"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import * as db from "../../../../database";
import { emptyUser, type User } from "../../../../account/AccountContext";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";

export default function PeopleTable() {
  const { cid } = useParams();
  const courseId = String(cid);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const [users, setUsers] = useState<User[]>(db.users);
  const [person, setPerson] = useState<User>(emptyUser);

  const enrolled = users.filter((usr) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === usr._id && enrollment.course === courseId,
    ),
  );

  const addPerson = () => {
    if (!person.firstName && !person.lastName) return;
    const newUser = { ...person, _id: crypto.randomUUID() };
    setUsers([...users, newUser]);
    enroll(newUser._id, courseId);
    setPerson(emptyUser);
  };

  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <input
          id="wd-person-first-name"
          placeholder="First name"
          className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
          value={person.firstName}
          onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
        />
        <input
          id="wd-person-last-name"
          placeholder="Last name"
          className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
          value={person.lastName}
          onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
        />
        <input
          id="wd-person-login-id"
          placeholder="Login ID"
          className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
          value={person.loginId}
          onChange={(e) => setPerson({ ...person, loginId: e.target.value })}
        />
        <input
          id="wd-person-section"
          placeholder="Section"
          className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
          value={person.section}
          onChange={(e) => setPerson({ ...person, section: e.target.value })}
        />
        <select
          id="wd-person-role"
          className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
          value={person.role}
          onChange={(e) => setPerson({ ...person, role: e.target.value })}
        >
          <option value="STUDENT">Student</option>
          <option value="TA">TA</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Admin</option>
        </select>
        <button
          type="button"
          id="wd-add-person-click"
          className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          onClick={addPerson}
        >
          Add Person
        </button>
      </div>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolled.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}