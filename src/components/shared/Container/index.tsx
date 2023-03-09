interface IContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: IContainerProps) => {
  return (
    <div className="p-4">
      {children}
    </div>
  )
}