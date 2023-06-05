import { Box, CircularProgress, Paper, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { InputTextProps } from 'types'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

function InputText ({ changeAction }: InputTextProps) {
  const [loading, setLoading] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [timer, setTimer] = useState<number | null>(null)

  useEffect(() => {
    setLoading(true)
    clearInterval(timer || 0)

    const newTimer = setTimeout(() => {
      changeAction(inputValue)
      setLoading(false)
    }, 500)

    setTimer(newTimer)
  }, [inputValue])

  return (
    <Paper
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}
      style={{ boxShadow: 'none' }}
    >
      <TextField
        autoComplete="none"
        placeholder="Search images"
        fullWidth
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {loading && (
        <Box sx={{ position: 'absolute', right: 20 }}>
          <CircularProgress size={20} color="info" />
        </Box>
      )}
      {!loading && inputValue && (
        <Box
          sx={{ position: 'absolute', right: 20, cursor: 'pointer' }}
          onClick={() => setInputValue('')}
        >
          <CloseOutlinedIcon />
        </Box>
      )}
    </Paper>
  )
}

export default InputText
