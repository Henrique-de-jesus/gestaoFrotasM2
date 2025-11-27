import { supabase } from "../services/supabase";

export async function testSupaBase() {
    try {
        const {data, error} = await supabase.from('veículos').select('*').limit(1)

        if(error) {
            console.log("Erro ao iniciar", error);
            return{ok: false, data}
        } else{
            console.log("Iniciado com sucesso!", data);
            return{ok: true, data}
        }
    } catch (err) {
            console.log("Error 404", data);
            return{ok: false, err}
    }
}