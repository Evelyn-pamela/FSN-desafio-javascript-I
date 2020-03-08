// Base a ser utilizada
const alunosDaEscola = [
  { nome: "Henrique", notas: [], cursos: [], faltas: 5 },
  { nome: "Edson", notas: [], cursos: [], faltas: 2 },
  { nome: "Bruno", notas: [10, 9.8, 9.6], cursos: [], faltas: 0 },
  {
    nome: "Guilherme",
    notas: [10, 9.8, 9.6],
    cursos: [{ nomeDoCurso: "Full Stack", dataMatricula: new Date() }],
    faltas: 0
  },
  { nome: "Carlos", notas: [], cursos: [], faltas: 0 },
  {
    nome: "Lucca",
    notas: [10, 9.8, 9.6],
    cursos: [{ nomeDoCurso: "UX", dataMatricula: new Date() }],
    faltas: 0
  }
];

// implementação

function adicionarAlunos(nome) {
  const alunoASerCriado = {
    nome: nome,
    notas: [],
    cursos: [],
    faltas: 0
  };

  alunosDaEscola.push(alunoASerCriado);

  return "Aluno adicionado com sucesso";
}

function listarAlunos() {
  for (const aluno of alunosDaEscola) {
    console.log(aluno.nome);
  }
}

function buscarAluno(nome) {
  const aluno = alunosDaEscola.filter(item => {
    return item.nome === nome;
  });

  if (aluno.length <= 0) {
    return "Aluno não encontrado";
  } else {
    return "Aluno encontrado: " + aluno[0].nome;
  }
}

function aplicarFalta(aluno) {
  if (aluno.cursos.length <= 0) {
    return "O aluno não está matriculado em nenhum curso";
  } else {
    aluno.falta = aluno.falta + 1;
    return "Falta adicionada com sucesso.";
  }
}

function aplicarNota(aluno, nota) {
  if (aluno.cursos.length <= 0) {
    return "Aluno não matriculado";
  } else {
    aluno.notas.push(nota);
    return "Nota adicionada com sucesso";
  }
}

function aprovarAluno(aluno) {
  if (aluno.cursos.length <= 0) {
    return "Aluno não matriculado";
  }

  const media = aluno.notas / aluno.notas.length;

  if ((aluno.faltas <= 3) & (media >= 7)) {
    return "Aluno aprovado";
  } else {
    return "Aluno não aprovado";
  }
}

function matricularAluno(aluno, curso) {
  if (buscarAluno(aluno.nome) === "Aluno não encontrado") {
    return "O aluno não esta cadastrado no sistema";
  }

  aluno.cursos.push(curso);

  return "Aluno matriculado no curso " + curso;
}
