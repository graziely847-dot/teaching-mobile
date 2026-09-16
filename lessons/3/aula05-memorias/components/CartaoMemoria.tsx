// AULA 5 — baseline já consolidada da Aula 4.
// O componente já existe e recebe props tipadas. Nesta aula NÃO vamos recriá-lo.
import { Pressable, StyleSheet, Text } from "react-native";
import { criarLegenda } from "../src/dominio";
import type { Memoria } from "../src/dominio";

type CartaoMemoriaProps = {
  memoria: Memoria;
  selecionada: boolean;
  aoSelecionar: (id: number) => void;
};

export function CartaoMemoria({ memoria, selecionada, aoSelecionar }: CartaoMemoriaProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={selecionada ? `Fechar ${memoria.titulo}` : `Abrir ${memoria.titulo}`}
      accessibilityHint={selecionada ? "Fecha os detalhes da memória selecionada" : "Abre os detalhes da memória"}
      onPress={() => aoSelecionar(memoria.id)}
      style={({ pressed }) => [styles.cartao, selecionada && styles.cartaoSelecionado, pressed && styles.cartaoPressionado]}
    >
      <Text style={styles.titulo}>{memoria.titulo}</Text>
      <Text style={styles.legenda}>{criarLegenda(memoria)}</Text>
      <Text style={styles.acao}>
        {selecionada ? "Toque para fechar" : "Toque para conhecer"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cartao: {
    backgroundColor: "#FFFFFF", borderColor: "#CBD5E1", borderWidth: 2,
    borderRadius: 12, padding: 16, marginBottom: 12, minHeight: 48,
  },
  cartaoSelecionado: { backgroundColor: "#F0FDF4", borderColor: "#2F9E41" },
  cartaoPressionado: { opacity: 0.9 },
  titulo: { color: "#0F172A", fontSize: 18, fontWeight: "700" },
  legenda: { color: "#475569", fontSize: 14, marginTop: 5 },
  acao: { color: "#166534", fontSize: 14, fontWeight: "700", marginTop: 10 },
});
