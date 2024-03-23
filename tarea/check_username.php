<?php
// Simular retardo de pocos segundos
sleep(2);

// Obtener el nombre de usuario enviado por GET
$username = $_GET['username'];

// Verificar disponibilidad (aquí se simula un resultado aleatorio)
$available = (rand(0, 1) == 1) ? true : false;

// Si no está disponible, proporcionar algunas sugerencias
$suggestions = $available ? [] : ['usuario123', 'nombre2024', 'user345'];

// Crear objeto JSON de respuesta
$response = [
  'available' => $available,
  'suggestions' => $suggestions
];

// Devolver objeto JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
 