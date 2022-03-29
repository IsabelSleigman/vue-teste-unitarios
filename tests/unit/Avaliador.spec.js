import Avaliador from '@/views/Avaliador'
import { mount, RouterLinkStub } from '@vue/test-utils'
import { getLeiloes } from '@/http'
import flushPromises from 'flush-promises'

jest.mock('@/http')

const leiloes = [
  {
    produto: "Livro da Cada do Código",
    lanceInicial: 50,
    descricao: "Livro sobre VueJs"
  },
  {
    produto: "Livro da Cada do Código",
    lanceInicial: 50,
    descricao: "Livro sobre Teste Unitario"
  }
]

describe('Um avaliador que se conecta com a API', () => {
  test('mostra todos os leilões retornados pela API', async () => {
    getLeiloes.mockResolvedValueOnce(leiloes)
    const wrapper = mount(Avaliador, {
      RouterLink: RouterLinkStub
    })
    await flushPromises()
    const totalLeilaoExibidos = wrapper.findAll('.leilao').length
    expect(totalLeilaoExibidos).toBe(leiloes.length)
  })
})
