export default function Member({ member }) {
  return (
    <p>
      <p>This is a member component</p>
      {member.firstName} {member.lastName}

    </p>
  );
}
