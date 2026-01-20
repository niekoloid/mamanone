export const useOnboarding = () => {
  const step = useState('onboarding_step', () => 0)
  const recordingState = useState<'idle' | 'recording' | 'completed'>('onboarding_recording_state', () => 'idle')
  const audioData = useState<Blob | null>('onboarding_audio_data', () => null)
  const childInfo = useState('onboarding_child_info', () => ({
    name: '',
    callSign: '',
    momCallSign: 'ママ'
  }))
  const generatedSong = useState('onboarding_generated_song', () => ({
    title: '',
    duration: '03:15'
  }))

  const setStep = (newStep: number) => {
    step.value = newStep
  }

  const startRecording = () => {
    recordingState.value = 'recording'
  }

  const stopRecording = (data: Blob) => {
    recordingState.value = 'completed'
    audioData.value = data
  }

  const resetRecording = () => {
    recordingState.value = 'idle'
    audioData.value = null
  }

  const updateChildInfo = (info: Partial<typeof childInfo.value>) => {
    childInfo.value = { ...childInfo.value, ...info }
  }

  const setGeneratedSong = (song: typeof generatedSong.value) => {
    generatedSong.value = song
  }

  return {
    step,
    recordingState,
    audioData,
    childInfo,
    generatedSong,
    setStep,
    startRecording,
    stopRecording,
    resetRecording,
    updateChildInfo,
    setGeneratedSong
  }
}
