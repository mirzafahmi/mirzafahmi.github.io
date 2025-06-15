import DjangoSvg from '../components/svgs/DjangoSvg';
import RenderSvg from '../components/svgs/RenderSvg';
import JwtSvg from '../components/svgs/JwtSvg';
import StripeSvg from '../components/svgs/StripeSvg';
import ScrapySvg from '../components/svgs/ScrapySvg';

const techCategories = [
    {
      title: '🎨 Frontend',
      items: [
        {
          name: 'HTML',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
          link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        },
        {
          name: 'CSS',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        },
        {
          name: 'JavaScript',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: 'Vue',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
          link: 'https://vuejs.org/',
        },
        {
          name: 'Vuetify',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg',
          link: 'https://vuetifyjs.com/',
        },
        {
          name: 'jQuery',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg',
          link: 'https://jquery.com/',
        },
        {
          name: 'Bootstrap',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
          link: 'https://getbootstrap.com/',
        },
        {
          name: 'Tailwind',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
          link: 'https://tailwindcss.com/',
        },
      ],
    },
    {
      title: '🧰 Backend',
      items: [
        {
          name: 'Python',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
          link: 'https://www.python.org/',
        },
        {
          name: 'Django',
          Svg: DjangoSvg,
          lightColor: '#092e20',
          darkColor: '#ffffff',
          link: 'https://www.djangoproject.com/',
        },
        {
          name: 'Django Rest Framework',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg',
          link: 'https://www.django-rest-framework.org/',
        },
        {
          name: 'Flask',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
          link: 'https://flask.palletsprojects.com/',
        },
        {
          name: 'FastAPI',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',
          link: 'https://fastapi.tiangolo.com/',
        },
        {
          name: 'pytest',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original-wordmark.svg',
          link: 'https://docs.pytest.org/',
        },
        {
          name: 'Pandas',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
          link: 'https://pandas.pydata.org/',
				},
				{
					name: 'Plotly',
					iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/plotly/plotly-original.svg',
					link: 'https://plotly.com/',
				},
				{
          name: 'Scrapy',
          Svg: ScrapySvg,
          lightColor: '#092e20',
          darkColor: '#ffffff',
          link: 'https://www.djangoproject.com/',
        },
        {
          name: 'PHP',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
          link: 'https://www.php.net/',
        },
        {
          name: 'Laravel',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
          link: 'https://laravel.com/',
        },
        {
          name: 'Livewire',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/livewire/livewire-original-wordmark.svg',
          link: 'https://laravel-livewire.com/',
        },
        {
          name: 'Node.js',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
          link: 'https://nodejs.org/',
        },
        {
          name: 'Express',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
          link: 'https://expressjs.com/',
        },
        {
          name: 'Nodemon',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg',
          link: 'https://nodemon.io/',
        },
        {
          name: 'Bash',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg',
          link: 'https://www.gnu.org/software/bash/',
        },
        {
          name: 'JSON Web Token',
          Svg: JwtSvg,
          lightColor: '#000000',
          darkColor: '#ffffff',
          link: 'https://jwt.io/',
        },
        {
          name: 'Stripe API',
          Svg: StripeSvg,
          lightColor: '#635BFF',
          darkColor: '#ffffff',
          link: 'https://stripe.com/docs/api',
        },
      ],
    },
    {
      title: '🗄️ Database',
      items: [
        {
          name: 'SQLite',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
          link: 'https://sqlite.org/',
        },
        {
          name: 'PostgreSQL',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg',
          link: 'https://www.postgresql.org/',
        },
        {
          name: 'DBeaver',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg',
          link: 'https://dbeaver.io/',
        },
        {
          name: 'Supabase',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg',
          link: 'https://supabase.com/',
        },
        {
          name: 'DBDiagram',
          iconUrl: 'https://cdn.holistics.io/logo-dbdiagram-notext.ico',
          link: 'https://dbdiagram.io/',
				},
				{
          name: 'SQLAlchemy',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg',
          link: 'https://www.sqlalchemy.org/',
        },
				{
					name: 'Sequelize',
					iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg',
					link: 'https://sequelize.org/'
				},
      ],
    },
    {
      title: '📱 Mobile Development',
      items: [
        {
          name: 'Dart',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg',
          link: 'https://dart.dev/',
        },
        {
          name: 'Flutter',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg',
          link: 'https://flutter.dev/',
        },
        {
          name: 'BLoC',
          iconUrl: 'https://bloclibrary.dev/_astro/bloc.DJLDGT9c_A0IIg.svg',
          link: 'https://bloclibrary.dev/',
        },
      ],
    },
    {
      title: '🧪 Development Tools',
      items: [
        {
          name: 'Git',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
          link: 'https://git-scm.com/',
        },
        {
          name: 'GitHub',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
          link: 'https://github.com/',
        },
        {
          name: 'Postman',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
          link: 'https://www.postman.com/',
        },
        {
          name: 'Bitbucket',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg',
          link: 'https://bitbucket.org/',
        },
        {
          name: 'Jira',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg',
          link: 'https://www.atlassian.com/software/jira',
        },
        {
          name: 'Confluence',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg',
          link: 'https://www.atlassian.com/software/confluence',
        },
        {
          name: 'Slack',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg',
          link: 'https://slack.com/',
        },
        {
          name: 'ArgoCD',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg',
          link: 'https://argo-cd.readthedocs.io/',
        },
        {
          name: 'Android Studio',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg',
          link: 'https://developer.android.com/studio',
        },
        {
          name: 'VS Code',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',
          link: 'https://code.visualstudio.com/',
        },
        {
          name: 'Nano',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nano/nano-original.svg',
          link: 'https://www.nano-editor.org/',
        },
        {
          name: 'Neovim',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neovim/neovim-original.svg',
          link: 'https://neovim.io/',
        },
        {
          name: 'TaskFile',
          iconUrl: 'https://taskfile.dev/img/logo.svg',
          link: 'https://taskfile.dev/',
        },
        {
          name: 'Docusaurus',
          iconUrl: './img/docusaurus.png',
          link: 'https://docusaurus.io/',
        },
      ],
    },
    {
      title: '💻 Operating System',
      items: [
        {
          name: 'Windows 11',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg',
          link: 'https://www.microsoft.com/windows/windows-11',
        },
        {
          name: 'Linux',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
          link: 'https://www.kernel.org/',
        },
        {
          name: 'Ubuntu',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg',
          link: 'https://ubuntu.com/',
        },
        {
          name: 'Linux Mint',
          iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Linux_Mint_logo_without_wordmark.svg',
          link: 'https://linuxmint.com/',
        },
      ],
    },
    {
      title: '📦 Containers & Orchestration',
      items: [
        {
          name: 'Docker',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
          link: 'https://www.docker.com/',
        },
        {
          name: 'Podman',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/podman/podman-original.svg',
          link: 'https://podman.io/',
        },
        {
          name: 'Kubernetes',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg',
          link: 'https://kubernetes.io/',   
        },
      ],
    },
    {
      title: '🚀 DevOps & Deployment',
      items: [
        {
          name: 'AWS',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
          link: 'https://aws.amazon.com/',
        },
        {
          name: 'Fly.io',
          iconUrl: 'https://fly.io/static/images/brand/brandmark.svg',
          link: 'https://fly.io/',
        },
        {
          name: 'Vercel',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg',
          link: 'https://vercel.com/',
        },
        {
          name: 'Render',
          Svg: RenderSvg,
          lightColor: '#092e20',
          darkColor: '#ffffff',
          link: 'https://render.com/',
        },
        {
          name: 'DigitalOcean',
          iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg',
          link: 'https://www.digitalocean.com/',
        },
      ],
    },
];
  
export default techCategories;