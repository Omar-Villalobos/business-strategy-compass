
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const Contact = () => {
  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
          Contacta con Nosotros
        </h2>
        <form className="space-y-6">
          <div>
            <Input placeholder="Nombre" />
          </div>
          <div>
            <Input type="email" placeholder="Email" />
          </div>
          <div>
            <Input placeholder="Empresa" />
          </div>
          <div>
            <Textarea placeholder="Mensaje" className="h-32" />
          </div>
          <Button className="w-full bg-[#1a365d] hover:bg-[#2a466d]">
            Enviar mensaje
          </Button>
        </form>
      </div>
    </div>
  );
};
