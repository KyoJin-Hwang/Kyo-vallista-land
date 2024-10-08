import profile from '../../config/profile.json'
import resume from '../../config/resume.json'

interface ReturningUseConfig {
  profile: {
    author: string
    title: string
    titleTemplate: string
    placeholder: string
    siteUrl: string
    description: string
    twitterUserName: string
    github: string
    secondary: string
  }
  resume: {
    config: {
      name: string
      role: string
      bio: string[]
      github: string
      velog: string
      email: string
    }
    careers: {
      title: string
      list: {
        name: string
        department: string
        position: string
        startDate: string
        endDate: string | null
        descriptions: string[]
        fold?: boolean
        projects?: {
          name: string
          descriptions: string[]
          startDate: string
          endDate: string | null
          which: string[]
          url: string | null
          techStacks: string[]
        }[]
      }[]
    }
    side: {
      title: string
      list: {
        title: string
        techStacks: string[]
        url: string | null
        descriptions: {
          title: string
          subTitle: string[]
        }[]
      }[]
    }
    skills: {
      title: string
      list: {
        title: string
        descriptions: {
          title: string
          subTitle: string[]
        }[]
      }[]
    }
    hobby: {
      description: string
      list: {
        title: string
        url: string
        descriptions: string[]
      }[]
    }
    speaker: {
      description: string
      list: {
        title: string
        url: string | null
      }[]
    }
    activities: {
      description: string | null
      list: {
        title: string
        url: string | null
      }[]
    }
    lectures: {
      description: string | null
      list: {
        title: string
        url: string | null
      }[]
    }
    awards: {
      description: string | null
      list: {
        title: string
        url: string | null
      }[]
    }
  }
}

export function useConfig(): ReturningUseConfig {
  return {
    profile: profile as ReturningUseConfig['profile'],
    resume: resume as ReturningUseConfig['resume']
  }
}
