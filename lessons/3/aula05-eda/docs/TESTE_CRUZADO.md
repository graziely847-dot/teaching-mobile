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

> O visitante não conseguiu identificar imediatamente que o botão de filtro era um controle de ação e não percebeu se o estado estava ativo ou inativo sem ler o texto com atenção.

### Autores

**Correção escolhida:**

> Deixamos o botão com destaque visual mais forte, texto claro e feedback de toque; também adicionamos rótulos de acessibilidade e área mínima adequada para clique.

**Arquivo/trecho alterado:**

> app/index.tsx e a configuração do Pressable com `accessibilityRole`, `accessibilityLabel`, `accessibilityHint` e `minHeight: 48` no estilo.

### Confirmação do visitante

Depois da correção, a tarefa ficou mais clara? `sim`

Comentário curto:

> O botão ficou mais óbvio e a ação pareceu mais confiável para tocar e entender o que estava acontecendo.
