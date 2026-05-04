```javascript
#!/usr/bin/env node

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ingredientes con información nutricional (por 100g)
const ingredientes = {
  pollo: { calorias: 165, proteina: 31, carbohidratos: 0, grasas: 3.6, tipo: 'proteína' },
  salmon: { calorias: 206, proteina: 22, carbohidratos: 0, grasas: 13, tipo: 'proteína' },
  huevo: { calorias: 155, proteina: 13, carbohidratos: 1.1, grasas: 11, tipo: 'proteína' },
  tofu: { calorias: 76, proteina: 8, carbohidratos: 1.9, grasas: 4.8, tipo: 'proteína' },
  
  arroz_integral: { calorias: 111, proteina: 2.6, carbohidratos: 23, grasas: 0.9, tipo: 'carbohidrato' },
  pasta_integral: { calorias: 124, proteina: 4.3, carbohidratos: 25, grasas: 1.1, tipo: 'carbohidrato' },
  batata: { calorias: 86, proteina: 1.6, carbohidratos: 20, grasas: 0.1, tipo: 'carbohidrato' },
  pan_integral: { calorias: 247, proteina: 8.4, carbohidratos: 43, grasas: 3.3, tipo: 'carbohidrato' },
  avena: { calorias: 389, proteina: 17, carbohidratos: 66, grasas: 6.9, tipo: 'carbohidrato' },
  
  brocoli: { calorias: 34, proteina: 2.8, carbohidratos: 7, grasas: 0.4, tipo: 'verdura' },
  espinaca: { calorias: 23, proteina: 2.9, carbohidratos: 3.6, grasas: 0.4, tipo: 'verdura' },
  zanahoria: { calorias: 41, proteina: 0.9, carbohidratos: 10, grasas: 0.2, tipo: 'verdura' },
  tomate: { calorias: 18, proteina: 0.9, carbohidratos: 3.9, grasas: 0.2, tipo: 'verdura' },
  lechuga: { calorias: 15, proteina: 1.2, carbohidratos: 3, grasas: 0.2, tipo: 'verdura' },
  
  manzana: { calorias: 52, proteina: 0.3, carbohidratos: 14, grasas: 0.2, tipo: 'fruta' },
  platano: { calorias: 89, proteina: 1.1, carbohidratos: 23, grasas: 0.3, tipo: 'fruta' },
  naranja: { calorias: 47, proteina: 0.9, carbohidratos: 12, grasas: 0.1, tipo: 'fruta' },
  fresas: { calorias: 32, proteina: 0.8, carbohidratos: 8, grasas: 0.3, tipo: 'fruta' },
  
  aceite_oliva: { calorias: 884, proteina: 0, carbohidratos: 0, grasas: 100, tipo: 'grasa' },
  almendras: { calorias: 579, proteina: 21, carbohidratos: 22, grasas: 50, tipo: 'grasa' },
  yogur_griego: { calorias: 59, proteina: 10, carbohidratos: 3.3, grasas: 0.4, tipo: 'lácteo' },
};

// Recetas predefinidas
const recetasPredefinidas = {
  'Pollo a la Plancha con Brócoli': {
    ingredientes: {
      pollo: 150,
      brocoli: 200,
      aceite_oliva: 10
    },
    instrucciones: [
      '1. Sazonar el pollo con sal y pimienta',
      '2. Cocinar el pollo a la plancha durante 15 minutos',
      '3. Cocer el brócoli al vapor durante 10 minutos',
      '4. Servir caliente'
    ],
    tiempo: 30
  },
  'Salmón con Batata': {
    ingredientes: {
      salmon: 150,
      batata: 200,
      limón: 0
    },
    instrucciones: [
      '1. Hornear el salmón a 180°C durante 15 minutos',
      '2. Asar la batata a 200°C durante 25 minutos',
      '3. Sazonar con limón y hierbas'
    ],
    tiempo: 40
  },
  'Ensalada Proteica': {
    ingredientes: {
      huevo: 100,
      lechuga: 150,
      tomate: 150,
      almendras: 25,
      aceite_oliva: 15
    },
    instrucciones: [
      '1. Hervir los huevos durante 10 minutos',
      '2. Picar la lechuga y el tomate',
      '3. Mezclar todos los ingredientes',
      '4. Aliñar con