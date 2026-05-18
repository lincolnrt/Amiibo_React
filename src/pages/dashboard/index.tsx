import React from 'react';
import { FiChevronRight } from 'react-icons/fi'; //feather icons
import logoImg from '../../assets/logoImg.png'
import { Title, Repositories, Info_venda, Obs } from './styles';


const Dashboard: React.FC = () => {

    return(
        <>
        <img src={logoImg} alt='Github explorer'/>

        <Title>Conheça os Amiibos OFICIAIS do encanador!</Title>
        <Info_venda>À venda a partir de Novembro/2020</Info_venda>
        <Obs>(Novos modelos serão atualizados por mês) </Obs>

        <Repositories>

            <a href="../repository/mario.tsx">
                <img src="https://tr.rbxcdn.com/4eaf712ceb1b5994c3b27765c0f73d0c/420/420/Decal/Png" alt="CD Projekt Red" />

                <div>

                    <strong>Mario</strong>

                    <p>
                        It's me, Mario!
                    </p>

                </div>

                <FiChevronRight size={20} />

            </a>

            <a href="../repository/luigi.tsx">
                <img src="https://64.media.tumblr.com/1900a350281159e53eace4490f803804/tumblr_pm8uqsxGHD1xiumf7o2_250.png" alt="CD Projekt Red" />

                <div>

                    <strong>Luigi</strong>

                    <p>
                        Mama mia!
                    </p>

                </div>

                <FiChevronRight size={20} />

            </a>

        </Repositories>

        </>
    );
};

export default Dashboard;
