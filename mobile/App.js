import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { Text, View } from 'react-native';

import Routes from './src/routes';

// Diferenças do Native para o ReactJs:
// - Tags HTML bem mais simpes ( em vez de div, header, footer, você só usa <View>
// não importa com o que for)
// - Não existe semântica, não existe um "h1 melhor que h2", aqui, é como se tudo
// fosse o h1, com a mesma importância

export default function App() {
  return (
    <Routes />
  );
}