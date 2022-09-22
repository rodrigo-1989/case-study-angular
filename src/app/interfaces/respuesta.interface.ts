
export interface Dto {
    ok:        boolean;
    mensaje:   string | null;
    productos: Producto[] | null;
    producto:  Producto | null;
    errores:   string[] | null;
    usuarios:  Usuario[] | null;
    usuario:   Usuario | null;
    pedidos:   Pedido[] | null;
    pedido:    Pedido | null;
}

export interface Pedido{
    id:          string;
    usuarioId:   string;
    listaCompra: Lc;
    fechaCompra: Date;
    total:       number;
    status:      string;
}
export interface Lc{
    idProducto: string;
    precio:     number;
    cantidad:   number;
}
export interface Producto {
    id:          string;
    nombre:      string;
    precio:      number;
    descripcion: string;
    imagen:      string | null;
    idImagen:    string | null;
    existentes:  number;
}

export interface Compra {
    id:         string;
    cantidad:   number;
    foto:       string;
    precio:     number;
    nombre:     string;
    existentes: number;
  }

  export interface CResponse {
    asset_id:          string;
    public_id:         string;
    version:           number;
    version_id:        string;
    signature:         string;
    width:             number;
    height:            number;
    format:            string;
    resource_type:     string;
    created_at:        Date;
    tags:              any[];
    bytes:             number;
    type:              string;
    etag:              string;
    placeholder:       boolean;
    url:               string;
    secure_url:        string;
    folder:            string;
    access_mode:       string;
    original_filename: string;
}

export interface Token {
    access_token:  string;
    token_type:    string;
    refresh_token: string;
    expires_in:    number;
    scope:         string;
    imagen:        string;
    usuario:       string;
    id:            string;
    nombre:        string;
    rol:           string[];
    email:         string;
    jti:           string;
}

export interface Usuario {
    id:       string | null;
    name:     string;
    username: string;
    password: string | null;
    email:    string;
    image:    string | null;
    intentos: number;
    createAt: Date;
    enabled:  boolean;
    roles:    string[];
    idImage:  string | null;
}

export interface AuthUsuario {
    id:      string;
    nombre:  string;
    usuario: string;
    imagen:  string;
    rol:     string[];
    correo:  string;
}

export interface Roles {
    rol: string;
    activo: boolean;
  }