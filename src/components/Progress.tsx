import CircularProgress from '@material-ui/core/CircularProgress'

const LoadingProgress: React.FC = () => {
  return (
    <div>
      <p>Loading...</p>
      <CircularProgress />
    </div>
  )
}

export default LoadingProgress
