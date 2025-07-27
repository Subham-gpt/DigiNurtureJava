import React from 'react';
import { useParams } from 'react-router-dom';
import trainersmock from './TrainersMock';

function TrainerDetails() {
  const { id } = useParams();
  const trainer = trainersmock.find(t => t.trainerId === id);

  if (!trainer) return <p>Trainer not found.</p>;

  return (
    <div>
      <h2>{trainer.name}'s Details</h2>
      <p><strong>Email:</strong> {trainer.email}</p>
      <p><strong>Phone:</strong> {trainer.phone}</p>
      <p><strong>Technology:</strong> {trainer.technology}</p>
      <p><strong>Skills:</strong> {trainer.skills}</p>
      <ul>
        {trainer.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrainerDetails;
