import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import DownloadFile from '../components/dropDownInfo/DownloadFile'

const mockStore = createStore(() => ({
  selected: {
    selectedData: {
      cat1: { name: 'Persian', origin: 'Iran', temperament: 'Calm' },
    },
    selectedIds: ['cat1'],
  },
}))

global.URL.createObjectURL = vi.fn(() => 'mockObjectURL')
global.URL.revokeObjectURL = vi.fn()
global.Blob = vi.fn().mockImplementation(() => ({
  text: () => Promise.resolve('mock data'),
}))

describe('DownloadFile component', () => {
  it('renders the download button correctly', () => {
    render(
      <Provider store={mockStore}>
        <DownloadFile />
      </Provider>,
    )
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  it('handles file download when clicked', () => {
    render(
      <Provider store={mockStore}>
        <DownloadFile />
      </Provider>,
    )

    const downloadButton = screen.getByRole('button')
    fireEvent.click(downloadButton)

    expect(URL.createObjectURL).toHaveBeenCalledWith(
      expect.objectContaining({}),
    )

    const downloadLink = document.createElement('a')
    downloadLink.href = 'mockObjectURL'
    downloadLink.download = `Cute_Cats_Data_Select-1.csv`

    expect(downloadLink.href).toBe('http://localhost:3000/mockObjectURL')
    expect(downloadLink.download).toBe('Cute_Cats_Data_Select-1.csv')
  })
})
