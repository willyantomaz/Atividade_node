Express ou Fastify

# check-list:
## [x] - Entender a atividade, isso envolve ler a atividade
## [x] - Instalar as dependencias
## [] - Opcional - Criar um dockerfile e um docker-compose.yml pra criar o container do banco escolhido
## [x] - Da um check se o servidor está funcionando
## [x] - Criar a service para a entidade escolhida, e fazer o CRUD
## [x] - Fazer a controller
## [x] - Criar as rotas no arquivo de rotas
## [x] - Testar as rotas
## [X] - Partir para as rotas com regra de negócio

	
Entidades:

- Usuário:
	Atributos: ID, username, peso, senha, e-mail.
	
- Categoria:
	Atributos: ID, nome, cor (para identificação visual).

- Tarefa:
	Atributos: ID, título, descrição, data de criação, data de conclusão, tipo, categoria (opcional), status (pendente, em andamento, concluída), e usuário associado.



Requisitos das Rotas (OPICIONAL - FAÇA POR ÚLTIMO):

Autenticação:

Rota de registro de usuário. OK.
Rota de login de usuário. OK.

Tarefas:

Rota para criação de uma nova tarefa. OK.
Rota para listar todas as tarefas de um usuário. OK.
Rota para obter detalhes de uma tarefa específica. OK.
Rota para atualizar uma tarefa existente. OK.
Rota para excluir uma tarefa. OK.

Categorias:

Rota para criação de uma nova categoria. OK.
Rota para listar todas as categorias de um usuário. OK.
Rota para obter detalhes de uma categoria específica. OK.
Rota para atualizar uma categoria existente. OK.
Rota para excluir uma categoria. OK.

Funcionalidades Adicionais utilizando Métodos de Array:

Rota para filtrar tarefas por categoria. Ok.	
Rota para listar tarefas concluídas / pendentes. Ok.
Rota para listar tarefas que vencem em um determinado período. Ok
Rota para contar o número total de tarefas de um usuário. Ok
Rota para encontrar a tarefa mais recente de um usuário. Ok

Rota para calcular a média de conclusão das tarefas.OK
Rota para encontrar a tarefa com a descrição mais longa. OK
Rota para agrupar tarefas por categoria. OK
Rota para encontrar a tarefa mais antiga de um usuário. OK

Observação:



npm i -D  @types/express @types/node nodemon ts-node typescript
Estas rotas podem ser implementadas utilizando os métodos .map, .filter, .resume, .some e outros métodos de manipulação de array para alcançar as funcionalidades desejadas, agregando complexidade média a difícil ao projeto. Certifique-se de implementar as devidas verificações de segurança e validação dos dados em cada rota.
