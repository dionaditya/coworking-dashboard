import React from 'react';

const TablePagination = () => (

        <div
        style={{
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            marginTop: '20px',
        }}
        >
        {['Previous', 1, 2, 3, 4, 5, 'Next'].map((key, i) => {
            return (
            <Link to={`/settings/membership?page=${i}`}>
                <div
                key={i}
                style={{
                    background: 'white',
                    border: '1px solid #D9DEE4',
                    padding: '10px',
                }}
                >
                {key}
                </div>
            </Link>
            );
        })}
        </div>;
)

