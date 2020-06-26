<template>
  <div>
    <b-card class="bg-yellow">
      <b-card-header class="bg-orange">
        <h1>Bence László</h1>
      </b-card-header>
      <b-card-body class="bg-dark text-light">
        <p>Software Developer</p>
      </b-card-body>
      <b-card-footer class="bg-dark" />
    </b-card>

    <b-card class="bg-yellow">
      <b-card-header class="bg-orange">
        <h2>Experience</h2>
      </b-card-header>
      <b-card-body class="bg-dark">
        <b-list-group>
          <b-list-group-item class="bg-yellow">
            <h3>DACHS Computing & Biosciences</h3>
            <b-list-group>
              <b-list-group-item class="bg-orange">
                <h4>
                  Application Developer
                  <b-badge
                    pill
                    variant="dark"
                  >
                    2019 Jul -
                  </b-badge>
                </h4>
                <BadgePill
                  v-for="pill in applicationDeveloperPills"
                  :key="pill.label"
                  v-bind="pill"
                />
              </b-list-group-item>
              <b-list-group-item class="bg-yellow">
                <h4>
                  Application Developer Intern
                  <b-badge
                    pill
                    variant="dark"
                  >
                    2018 Sep - 2019 Jun
                  </b-badge>
                </h4>
                <BadgePill
                  v-for="pill in internPills"
                  :key="pill.label"
                  v-bind="pill"
                />
              </b-list-group-item>
              <b-list-group-item class="bg-orange">
                <h4>
                  Summer Intern
                  <b-badge
                    pill
                    variant="dark"
                  >
                    2018 Jul - 2018 Aug
                  </b-badge>
                </h4>
                <BadgePill
                  v-for="pill in summerInternPills"
                  :key="pill.label"
                  v-bind="pill"
                />
              </b-list-group-item>
            </b-list-group>
          </b-list-group-item>
        </b-list-group>
      </b-card-body>
    </b-card>

    <b-card class="bg-yellow container-fluid">
      <b-card-header class="bg-orange">
        <h2>Education</h2>
      </b-card-header>
      <b-card-body class="bg-dark">
        <b-list-group>
          <b-list-group-item class="bg-yellow">
            <h3>
              University of Miskolc - Faculty of Mechanical Engineering and Informatics
              <b-badge
                pill
                variant="dark"
              >
                2016-2019
              </b-badge>
            </h3>
            <p>Bachelor's of Science - Computer Science</p>
            <BadgePill
              v-for="pill in bscTechnologyPills"
              :key="pill.label"
              v-bind="pill"
            />
          </b-list-group-item>
          <b-list-group-item class="bg-yellow">
            <h3>
              Attila József Secondary School (Ózd)
              <b-badge
                pill
                variant="dark"
              >
                2012-2016
              </b-badge>
            </h3>
            <p>Informatics - Matura</p>
            <BadgePill
              v-for="pill in highSchoolTechnologyPills"
              :key="pill.label"
              v-bind="pill"
            />
          </b-list-group-item>
        </b-list-group>
      </b-card-body>
      <b-card-footer class="bg-dark" />
    </b-card>

    <b-card class="bg-yellow">
      <b-card-header class="bg-orange">
        <h2>Contact</h2>
      </b-card-header>
      <b-card-body class="bg-dark" />
      <b-card-footer class="bg-dark">
        <b-list-group horizontal>
          <a
            href="https://github.com/bencelaszlo"
            target="_blank"
            alt="GitHub profile"
            lang="en"
            class=".flex-fill ml-auto"
          >
            <b-list-group-item class="bg-dark-2 text-light">
              <div v-if="$isMobile()">
                <github-icon size="1x" />
              </div>
              <div v-else>
                <github-icon size="2x" />
                <span class="ml-2">GitHub</span>
              </div>
            </b-list-group-item>
          </a>
          <a
            href="https://gitlab.com/bencelaszlo"
            target="_blank"
            alt="GitLab profile"
            lang="en"
            class=".flex-fill"
          >
            <b-list-group-item class="bg-orange">
              <div v-if="$isMobile()">
                <gitlab-icon size="1x" />
              </div>
              <div v-else>
                <gitlab-icon size="2x" />
                <span class="ml-2">GitLab</span>
              </div>
            </b-list-group-item>
          </a>
          <a
            href="https://www.linkedin.com/in/bence-laszlo/"
            target="_blank"
            alt="LinkedIn profile"
            lang="en"
            class=".flex-fill"
          >
            <b-list-group-item class="bg-cyan">
              <div v-if="$isMobile()">
                <linkedin-icon size="1x" />
              </div>
              <div v-else>
                <linkedin-icon size="2x" />
                <span class="ml-2">LinkedIn</span>
              </div>
            </b-list-group-item>
          </a>
          <b-list-group-item class=".flex-fill mr-auto bg-green">
            <div v-if="$isMobile()">
              <mail-icon size="1x" />
            </div>
            <div v-else>
              <mail-icon size="2x" />
              <span class="ml-2">Email</span>
            </div>
          </b-list-group-item>
        </b-list-group>
      </b-card-footer>
    </b-card>
  </div>
</template>

<script>
    import {
        GithubIcon,
        GitlabIcon,
        MailIcon,
        LinkedinIcon
    } from "vue-feather-icons";
    import BadgePill from './BadgePill'

    export default {
        name: "About",

        components: {
            GithubIcon,
            GitlabIcon,
            MailIcon,
            LinkedinIcon,
            BadgePill
        },

        props: {},

        data: () => {
            return {
                applicationDeveloperPills: [
                    {
                        label: 'JavaScript',
                        variant: 'yellow'
                    },
                    {
                        label: 'Vue.JS',
                        variant: 'teal'
                    },
                    {
                        label: 'Git',
                        variant: 'red'
                    },
                    {
                        label: 'Node.JS',
                        variant: 'green'
                    },
                    {
                        label: 'npm',
                        variant: 'red'
                    },
                    {
                        label: 'Jest',
                        variant: 'purple'
                    },
                    {
                        label: 'Amazon S3',
                        variant: 'orange'
                    },
                    {
                        label: 'Amazon Lambda',
                        variant: 'red'
                    },
                    {
                        label: 'C#',
                        variant: 'indigo'
                    },
                    {
                        label: 'ASP.NET Core',
                        variant: 'blue'
                    },
                    {
                        label: 'WPF',
                        variant: 'blue'
                    },
                    {
                        label: 'Unity 3D',
                        variant: 'bg-dark-2'
                    }
                ],
                internPills: [
                    {
                        label: 'Java',
                        variant: 'orange'
                    },
                    {
                        label: 'Git',
                        variant: 'red'
                    },
                    {
                        label: 'C#',
                        variant: 'indigo'
                    },
                    {
                        label: 'Unity 3D',
                        variant: 'bg-dark-2'
                    },
                    {
                        label: 'MQTT',
                        variant: 'purple'
                    },
                    {
                        label: 'Swing',
                        variant: 'red'
                    },
                    {
                        label: 'PostgreSQL',
                        variant: 'blue'
                    },
                    {
                        label: 'PL/pgSQl',
                        variant: 'blue'
                    },
                    {
                        label: 'SQL',
                        variant: 'teal'
                    }
                ],
                summerInternPills: [
                    {
                        label: 'Java',
                        variant: 'orange'
                    },
                    {
                        label: 'Git',
                        variant: 'grey'
                    },
                    {
                        label: 'Swing',
                        variant: 'red'
                    }
                ],
                bscTechnologyPills: [
                        {
                            label: 'ANSI C',
                            variant: 'red',
                        },
                        {
                            label: 'shell script',
                            variant: 'blue'
                        },
                        {
                            label: 'bash',
                            variant: 'dark'
                        },
                        {
                            label: 'HTML',
                            variant: 'green'
                        },
                        {
                            label: 'CSS',
                            variant: 'green'
                        },
                        {
                            label: 'Java',
                            variant: 'yellow'
                        },
                        {
                            label: 'IPC',
                            variant: 'yellow'
                        },
                        {
                            label: 'TeX',
                            variant: 'cyan'
                        },
                        {
                            label: 'LaTeX',
                            variant: 'blue'
                        },
                        {
                            label: 'SQL',
                            variant: 'green'
                        },
                        {
                            label: 'MatLab',
                            variant: 'red'
                        },
                        {
                            label: 'database',
                            variant: 'ble'
                        },
                        {
                            label: 'operating system',
                            variant: 'green'
                        },
                        {
                            label: 'numerical methods',
                            variant: 'blue'
                        },
                        {
                            label: 'OpenGL',
                            variant: 'purple'
                        },
                        {
                            label: 'GLUT',
                            variant: 'grey'
                        },
                        {
                            label: 'FreeGLUT',
                            variant: 'grey'
                        },
                        {
                            label: 'parallel processing',
                            variant: 'orange'
                        },
                        {
                            label: 'OpenMPI',
                            variant: 'green'
                        },
                        {
                            label: 'R',
                            variant: 'blue'
                        },
                        {
                            label: 'JavaScript',
                            variant: 'yellow'
                        },
                        {
                            label: 'Node.JS',
                            variant: 'green'
                        },
                        {
                            label: 'cmake',
                            variant: 'yellow'
                        },
                        {
                            label: 'Makefile',
                            variant: 'grey'
                        },
                        {
                            label: 'jQuery',
                            variant: 'purple'
                        },
                        {
                            label: 'npm',
                            variant: 'red'
                        },
                        {
                            label: 'gcc',
                            variant: 'grey'
                        },
                        {
                            label: 'express',
                            variant: 'red'
                        },
                        {
                            label: 'OpenMP',
                            variant: 'green'
                        },
                        {
                            label: 'Rust',
                            variant: 'brown'
                        },
                        {
                            label: 'rustc',
                            variant: 'red'
                        },
                        {
                            label: 'Rust Cargo',
                            variant: 'orange'
                        },
                        {
                            label: 'ReactJS',
                            variant: 'cyan'
                        },
                        {
                            label: 'flux',
                            variant: 'blue'
                        },
                        {
                            label: 'mongoDB',
                            variant: 'red'
                        },
                        {
                            label: 'mongoose',
                            variant: 'orange'
                        },
                        {
                            label: 'Linux',
                            variant: 'teal'
                        },
                        {
                            label: 'Git',
                            variant: 'grey'
                        },
                        {
                            label: 'Sass',
                            variant: 'pink'
                        },
                        {
                            label: 'node-sass',
                            variant: 'purple'
                        },
                        {
                            label: 'Pthreads',
                            variant: 'red'
                        },
                        {
                            label: 'Push.JS',
                            variant: 'orange'
                        },
                        {
                            label: 'XML',
                            variant: 'green'
                        },
                        {
                            label: 'XSD',
                            variant: 'teal'
                        },
                        {
                            label: 'DTD',
                            variant: 'Cyan'
                        },
                        {
                            label: 'JSON',
                            variant: 'blue'
                        },
                        {
                            label: 'XPath',
                            variant: 'teal'
                        }
                ],
                highSchoolTechnologyPills: [
                    {
                        label: 'HTML',
                        variant: 'green'
                    },
                    {
                        label: 'CSS',
                        variant: 'yellow'
                    },
                    {
                        label: 'SQL',
                        variant: 'blue'
                    },
                    {
                        label: 'Pascal',
                        variant: 'teal'
                    }
                ]
            }
        }
    };
</script>

<style lang="scss">
</style>