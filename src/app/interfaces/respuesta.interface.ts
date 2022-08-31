
export interface Dto {
    ok:        boolean;
    mensaje:   string;
    productos: Producto[];
    producto:  null;
    errores:   null;
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
    id: string;
    cantidad: number;
    foto: string;
    precio: number;
    nombre: string;
    existentes:  number;
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
    access_token: string;
    token_type:   string;
    expires_in:   number;
    imagen:       string;
    usuario:      string;
    nombre:       string;
    rol:          string[];
    id:           string;
}

export interface Usuario {
    id:       string | null;
    name:     string;
    username: string;
    password: string;
    email:    string;
    image:    string;
    intentos: number;
    createAt: Date;
    enabled:  boolean;
    roles:    string[];
    idImage:  string;
}

export interface TokenError {
    error:             string;
    error_description: string;
}

export interface AuthUsuario {
    id:      string;
    nombre:  string;
    usuario: string;
    imagen:   string;
    rol:     string[];
}