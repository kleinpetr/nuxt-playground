export const useTest = (arg: any) => {
  const stateVar = useState<string[]>(`test-${arg}`, () => [])
  
  const addString = (str: string) => {
    stateVar.value.push(str)
  }

  const updateVar = () => {
    stateVar.value = ['this is not populated in devtool']
  }


  return {
    stateVar,
    addString,
    updateVar,
  }
}
