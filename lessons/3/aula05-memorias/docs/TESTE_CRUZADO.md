# Boss Fight — Teste Cego por Pares

## Regra dos 60 segundos

A dupla visitante usa a interface **sem receber explicação**. A dupla autora não pode apontar onde tocar.

### Visitante

- O que parece acionável?
- O toque produz resposta perceptível?
- Algum estado depende apenas de cor?
- O texto e a hierarquia estão claros?
- Há algo apertado, ambíguo ou difícil de tocar?

**Uma barreira observada:**

> O visitante hesitou para entender que cada cartão era clicável e não percebeu de imediato quando uma memória havia sido selecionada.

### Autores

**Correção escolhida:**

> Adicionamos rótulos de acessibilidade, feedback visual de pressão e destaque para a memória selecionada, além de tornar a área de toque mais confortável.

**Arquivo/trecho alterado:**

> components/CartaoMemoria.tsx e app/index.tsx, com `Pressable`, `accessibilityLabel`, `accessibilityHint` e estilo visual de seleção.

### Confirmação do visitante

Depois da correção, a tarefa ficou mais clara? `sim`

Comentário curto:

> A interação ficou mais intuitiva, com melhor sinal de que o cartão foi selecionado e de que ele era um botão.
