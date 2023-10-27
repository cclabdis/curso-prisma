# Dia 2 da semana de fundamentos.

- ACID e Transactions
    - Entender o acrônimo ACID e relacionar com os bancos de dados relacionais.
    - Entender o que são transações e em que cenários são aplicadas.
- Índices no banco de dados
    - Otimizar o processo de busca no banco de dados utilizando índices.
    - Entender o papel de um index em um banco de dados.
    - Ponderar as vantagens e desvantagens de indexar o banco de dados.


    - Essas características são representadas no que é mundialmente conhecido como as propriedades **ACID**. É um acrônimo para as palavras (A)tomicidade, (C)onsistência, I(ntegridade) e D(urabilidade). Vamos entender os que cada uma delas significa na prática:

    - **Atomicidade (Atomicity):** A propriedade de atomicidade garante que uma transação seja tratada como uma unidade indivisível de trabalho. Isso significa que, se uma transação contém várias operações, todas elas devem ser executadas com sucesso, caso contrário, nenhuma das operações será efetivada. Se ocorrer qualquer falha durante a execução da transação, o banco de dados deve reverter todas as operações realizadas até o ponto em que a transação começou (**rollback**), deixando o banco de dados em um estado consistente.

    - **Consistência (Consistency)**: A propriedade de consistência garante que uma transação leve o banco de dados de um estado consistente para outro estado consistente. Isso significa que as regras e restrições definidas no banco de dados devem ser aplicadas corretamente durante a execução da transação, de modo que o banco de dados permaneça consistente antes e depois da transação.

    - **Isolamento (Isolation):** A propriedade de isolamento garante que cada transação seja executada de forma isolada e independente de outras transações concorrentes. Isso evita problemas como leituras sujas, onde uma transação lê dados modificados por outra transação antes que ela seja concluída, ou escritas sujas, onde uma transação sobrescreve dados de outra transação antes que ela seja confirmada.
    - O isolamento garante que cada transação veja apenas o estado consistente do banco de dados, como se estivesse sendo executada sozinha.

    - **Durabilidade (Durability):** A propriedade de durabilidade garante que, uma vez que uma transação seja confirmada (commit), todas as mudanças feitas por essa transação sejam permanentemente armazenadas no banco de dados, mesmo em caso de falha do sistema. Isso significa que os dados alterados devem sobreviver a reinicializações, panes ou outros problemas que possam ocorrer após a confirmação da transação.

    Como é que o banco consegue fazer esse controle dos recursos se vários usuários diferentes podem estar usando simultaneamente? Através de locks!
    <https://www.prisma.io/docs/concepts/components/prisma-schema/indexes>