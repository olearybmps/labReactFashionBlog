import React from 'react';

function Article({ entry }) {
    return (
        <article className='entryContainer'>
            <div className='entryDate'>{entry.date}</div>
            <h1 className='entryTitle'>{entry.title}</h1>
            {entry.image && <img src={entry.image} alt={entry.title} />}
            <div className='entryBody'>{entry.body}</div>
            <div className='continueLink'><a href="/link">Continues...</a></div>
        </article>
    );
}

export default Article;