import { useEffect, useState } from "react";
import type Program from "./types/Program";

function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((result) => setPrograms(result));
  }, []);

  return (
    <section>
      {programs.map((program) => (
        <p key={program.id}>{program.title}</p>
      ))}
    </section>
  );
}

export default Programs;
