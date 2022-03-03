import appConfig from '../config.json';
import {Box, Button, Text,TextField,Image} from '@skynexui/components';
import React from 'react';
import {useRouter} from 'next/router';

//Componentes do react
// Função javascript que retornam html

function Titulo(props){
    const Tag = props.tag || 'h1';
    return (
    <>
    <Tag>{props.children}</Tag>
    <style jsx>{`
           ${Tag}{
               color: ${appConfig.theme.colors.neutrals['400']};
               font-size: 24px;
               font-weight: 600;
           }
        `}</style>
    </>
    );
}

// Na HomePage no Titulo foi criado o parametro Tag, que é transformado
// no Titulo em uma variavel e é trabalhada pelo componente. 

export default function PaginaInicial() {
    //const username = 'diegodreossi';
    //Expande o array
    const [username, setUsername] = React.useState('diegodreossi'); 
    //É esse setUsername que cria um novo estado da página
    const roteamento = useRouter();
    //Padroniza as rotas/url

    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[500],
            backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function (infosevento){
                infosevento.preventDefault();
                //Evita comportamento padrão dos navegadores, que
                //nesse caso é reiniciar toda a página quando o botão é 
                //apertado, ou seja, quando o formulário é submetido 
                //window.location.href ='/chat'; //Muda a página
                roteamento.push(`/chat?username=${username}`);
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Titulo tag="h2">Boas vindas de volta!</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>
  
              

              <TextField
                value={username} 
                onChange={function handler(event){
                 //Onde está o valor?
                 const valor = event.target.value;
                 // Trocar o valor da variável
                 setUsername(valor);
                }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[600],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/*Area da foto */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png` }
              />
              
              
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Area da foto */}
          </Box>
        </Box>
      </>
    );
  }