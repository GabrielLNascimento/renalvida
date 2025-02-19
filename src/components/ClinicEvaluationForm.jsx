import React, { useState } from 'react';
import RatingQuestion from './RatingQuestion';

function ClinicEvaluationForm() {
    const [form, setForm] = useState({
        quest01: '',
        quest02: '',
        quest03: '',
        quest04: '',
        quest05: '',
        quest06: '',
        quest07: '',
        quest08: '',
        quest09: '',
        quest10: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verifica se todos os campos estão preenchidos
        const isFormValid = Object.values(form).every((value) => value !== '');
        if (!isFormValid) {
            alert('Por favor, preencha todas as opções antes de enviar.');
            return; // Interrompe o envio se algum campo estiver vazio
        }

        setStatus('loading'); // Mostra a tela de carregamento

        try {
            await fetch(
                'https://script.google.com/macros/s/AKfycbyih4RIuV2UJG7jdex-j9QVRVQuHukOduZ1qOBZ6lWJ53j8bwYuYbVR8NfdSHhBJR_QgA/exec',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(form),
                    mode: 'no-cors',
                }
            );
            setStatus('success');
            setForm({
                quest01: '',
                quest02: '',
                quest03: '',
                quest04: '',
                quest05: '',
                quest06: '',
                quest07: '',
                quest08: '',
                quest09: '',
                quest10: '',
            });

            // Exibe o alerta de sucesso
            alert('✅ Avaliação enviada com sucesso!');

            // Recarrega a página automaticamente
            window.location.reload();
        } catch (error) {
            setStatus('error');
            console.error('Erro:', error);
        }
    };

    if (status === 'loading') {
        return (
            <div style={styles.loadingContainer}>
                <h2>Enviando sua avaliação...</h2>
            </div>
        );
    }

    return (
        <div className="container" style={styles.container}>
            <h2 style={styles.title}>Avaliação da Clínica</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <RatingQuestion
                    questionNumber="1"
                    questionText="Como você avalia o atendimento da recepção?"
                    name="quest01"
                    value={form.quest01}
                    onChange={handleChange}
                />

                <RatingQuestion
                    questionNumber="2"
                    questionText="Como você avalia o tempo de espera para ser atendido?"
                    name="quest02"
                    value={form.quest02}
                    onChange={handleChange}
                />

                <RatingQuestion
                    questionNumber="3"
                    questionText="Como você avalia a cordialidade da equipe médica?"
                    name="quest03"
                    value={form.quest03}
                    onChange={handleChange}
                />

                <RatingQuestion
                    questionNumber="4"
                    questionText="Como você avalia a atenção da equipe médica ao esclarecer suas dúvidas?"
                    name="quest04"
                    value={form.quest04}
                    onChange={handleChange}
                />

                <RatingQuestion
                    questionNumber="5"
                    questionText="Como você avalia a limpeza e higiene da clínica?"
                    name="quest05"
                    value={form.quest05}
                    onChange={handleChange}
                />

                <RatingQuestion
                    questionNumber="6"
                    questionText="Como você avalia o conforto das instalações (cadeiras, salas de espera, equipamentos)?"
                    name="quest06"
                    value={form.quest06}
                    onChange={handleChange}
                />

                <RatingQuestion
                    questionNumber="7"
                    questionText="Como você avalia o conforto das instalações (cadeiras, salas de espera, equipamentos)?"
                    name="quest07"
                    value={form.quest07}
                    onChange={handleChange}
                />

                <RatingQuestion
                    questionNumber="8"
                    questionText="Como você avalia o conforto das instalações (cadeiras, salas de espera, equipamentos)?"
                    name="quest08"
                    value={form.quest08}
                    onChange={handleChange}
                />

                <RatingQuestion
                    questionNumber="9"
                    questionText="Como você avalia o conforto das instalações (cadeiras, salas de espera, equipamentos)?"
                    name="quest09"
                    value={form.quest09}
                    onChange={handleChange}
                />

                <RatingQuestion
                    questionNumber="10"
                    questionText="Como você avalia o conforto das instalações (cadeiras, salas de espera, equipamentos)?"
                    name="quest10"
                    value={form.quest10}
                    onChange={handleChange}
                />

                <div style={styles.buttonContainer}>
                    <button type="submit" style={styles.button}>
                        Enviar Avaliação
                    </button>
                </div>
            </form>
        </div>
    );
}

const styles = {
    container: {
        background: '#aaa',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgb(0, 0, 0)',
        maxWidth: '600px',
        margin: '50px auto',
        fontFamily: 'Arial, sans-serif',
    },
    title: {
        textAlign: 'center',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        width: 'fit-content',
        padding: '10px 20px',
        background: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        fontSize: '16px',
        cursor: 'pointer',
    },
    loadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
        textAlign: 'center',
    },
};

export default ClinicEvaluationForm;
