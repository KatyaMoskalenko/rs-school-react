import React from 'react';
import './BookCard.scss';
import { Book } from 'pages/home/Home';

interface BookProps {
  card: Book;
}

export default function BookCard({ card }: BookProps): ReturnType<React.FC> {
  return (
    <div className="card">
      <div className="card-title">{card.name}</div>
    </div>
  );
}
