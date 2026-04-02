// You can pass an entire object or array as a single prop.

// Receives a 'user' object as one prop
function UserCard({ user }) {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.role}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

// Receives a 'skills' array and maps over it
function SkillList({ skills }) {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li> // key is required when rendering lists
      ))}
    </ul>
  );
}

function ObjectProps() {
  const student = { name: 'Abhyuday', role: 'Frontend Dev', age: 20 };
  const techSkills = ['React', 'JavaScript', 'CSS'];

  return (
    <div>
      <h4>Object prop:</h4>
      <UserCard user={student} />

      <h4>Array prop:</h4>
      <SkillList skills={techSkills} />
    </div>
  );
}

export default ObjectProps;
