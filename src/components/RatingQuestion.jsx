import React from 'react';
import './RatingQuestion.css';

const RatingQuestion = ({ questionNumber, questionText, name, value, onChange, required = false }) => {
    const options = [
        { value: '1', label: '😭' },
        { value: '2', label: '😓' },
        { value: '3', label: '🙂' },
        { value: '4', label: '😁' },
        { value: '5', label: '🤩' },
    ];

    return (
        <div className="question">
            <label className="question-label">
                {questionNumber}. {questionText}
            </label>
            <div className="rating">
                {options.map((option) => (
                    <label
                        key={option.value}
                        className={`option ${value === option.value ? 'selected' : ''}`}
                    >
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={value === option.value}
                            onChange={onChange}
                            required={required}
                        />
                        <span>{option.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default RatingQuestion;
