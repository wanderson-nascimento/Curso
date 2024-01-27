import { Button } from "./components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import { Search, PlusCircle, Plus } from 'lucide-react'

export function App() {
  return (
    <>
      <div className="p-6 max-w-4xl mx-auto space-y-4">
        <h1 className="font-bold text-3xl">Produtos</h1>
        <div className="flex items-center justify-between">
          <form className="flex items-center gap-2">
            <Input name="id" placeholder="Id do produto" />
            <Input name="nome" placeholder="Nome do produto" />
            <Input name="preco" placeholder="Preço do produto" />
            <Button type="submit" variant='link'>
              <Search className="size-4 mr-2" />
              Listar resultados
            </Button>
          </form>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="size-4 mr-2" />
                Novo produto
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  Novo produto
                </DialogTitle>
                <DialogDescription>
                  Insira as informações do novo produto
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-6">
                <div className="grid grid-cols-4 items-center text-right gap-3">
                  <Label htmlFor="name">Id do produto</Label>
                  <Input className="col-span-3" id="name" />
                </div>
                
                <div className="grid grid-cols-4 items-center text-right gap-3">
                  <Label htmlFor="id">Nome</Label>
                  <Input className="col-span-3" id="id" />
                </div>
                
                <div className="grid grid-cols-4 items-center text-right gap-3">
                  <Label htmlFor="price">Preço</Label>
                  <Input className="col-span-3" id="price" />
                </div>
              </form>
              <DialogFooter>
                <Button type="submit">
                  Salvar
                </Button>
                <DialogClose asChild>
                  <Button variant={"ghost"}>
                    Fechar
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="border rounded">
          <Table>
            <TableCaption>Lista de items</TableCaption>
            <TableHeader>
              <TableHead>ID</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Preço</TableHead>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow>
                    <TableCell>d3ff56g4v2f23f </TableCell>
                    <TableCell>Produto {i}</TableCell>
                    <TableCell>R$ 118,99</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
