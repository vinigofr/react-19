import Theme from "@/app/components/Theme"
import { PageContextProvider } from "@/app/contexts/PageContext"

export default function UseWithContext() {

  return (
    <PageContextProvider>
      <Theme />
    </PageContextProvider>
  )
}