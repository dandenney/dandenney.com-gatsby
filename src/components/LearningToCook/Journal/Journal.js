import React from 'react';
import JournalList from 'components/LearningToCook/JournalList';

const Journal = ({ data }) => (
  <section>
    <h2>Journal</h2>
    <p>Short shares as I try techniques and recipes.</p>

    <JournalList data={data} />
  </section>
);

export default Journal;
