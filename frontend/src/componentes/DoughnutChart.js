import React, { useEffect, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

function DoughnutChart({ data, colors, size=150 }) {
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    useEffect(() => {
        // Destruir la instancia previa del gráfico antes de crear una nueva
        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        // Crear una nueva instancia del gráfico
        chartInstanceRef.current = new Chart(chartRef.current, {
            type: 'doughnut',
            data: {
                labels: ['Completado', 'En progreso'],
                datasets: [
                    {
                        data: data,
                        backgroundColor: colors,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                cutout: '70%',
            },
        });

        // Destruir el gráfico al desmontar el componente
        return () => {
            chartInstanceRef.current.destroy();
        };
    }, [data, colors]);

    return (
        <div style={{ width: `${size}px`, height: `${size}px` }}>
            <canvas ref={chartRef} />
        </div>
    );
}

export default DoughnutChart;
