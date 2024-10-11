export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      appVersion: {
        Row: {
          created_at: string
          id: number
          latestVersion: string
          mandatory: boolean
          releaseNotes: string | null
          showUpdateWarning: boolean
        }
        Insert: {
          created_at?: string
          id?: number
          latestVersion: string
          mandatory?: boolean
          releaseNotes?: string | null
          showUpdateWarning?: boolean
        }
        Update: {
          created_at?: string
          id?: number
          latestVersion?: string
          mandatory?: boolean
          releaseNotes?: string | null
          showUpdateWarning?: boolean
        }
        Relationships: []
      }
      comment_pattern: {
        Row: {
          comment: string | null
          created_at: string
          id: number
          pattern: string | null
          user: string | null
          userName: string | null
        }
        Insert: {
          comment?: string | null
          created_at?: string
          id?: number
          pattern?: string | null
          user?: string | null
          userName?: string | null
        }
        Update: {
          comment?: string | null
          created_at?: string
          id?: number
          pattern?: string | null
          user?: string | null
          userName?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_comment_pattern_pattern_fkey"
            columns: ["pattern"]
            isOneToOne: false
            referencedRelation: "pattern"
            referencedColumns: ["label"]
          },
          {
            foreignKeyName: "public_comment_pattern_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      comment_useful: {
        Row: {
          comment_id: number | null
          created_at: string
          id: number
          pattern: string | null
          user_id: string | null
        }
        Insert: {
          comment_id?: number | null
          created_at?: string
          id?: number
          pattern?: string | null
          user_id?: string | null
        }
        Update: {
          comment_id?: number | null
          created_at?: string
          id?: number
          pattern?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_comment_useful_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "comment_pattern"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_comment_useful_pattern_fkey"
            columns: ["pattern"]
            isOneToOne: false
            referencedRelation: "pattern"
            referencedColumns: ["label"]
          },
          {
            foreignKeyName: "public_comment_useful_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      featured_tyer: {
        Row: {
          name: string
        }
        Insert: {
          name: string
        }
        Update: {
          name?: string
        }
        Relationships: [
          {
            foreignKeyName: "featured_tyer_name_fkey"
            columns: ["name"]
            isOneToOne: true
            referencedRelation: "fly_tyers"
            referencedColumns: ["name"]
          },
        ]
      }
      fly_tyers: {
        Row: {
          about: string | null
          created_at: string
          id: number
          location: string | null
          logo_name: string | null
          name: string | null
          website: string | null
        }
        Insert: {
          about?: string | null
          created_at?: string
          id?: number
          location?: string | null
          logo_name?: string | null
          name?: string | null
          website?: string | null
        }
        Update: {
          about?: string | null
          created_at?: string
          id?: number
          location?: string | null
          logo_name?: string | null
          name?: string | null
          website?: string | null
        }
        Relationships: []
      }
      geo_species: {
        Row: {
          created_at: string
          id: number
          species: string | null
          stateNames: string[] | null
        }
        Insert: {
          created_at?: string
          id?: number
          species?: string | null
          stateNames?: string[] | null
        }
        Update: {
          created_at?: string
          id?: number
          species?: string | null
          stateNames?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "geo_species_species_fkey"
            columns: ["species"]
            isOneToOne: false
            referencedRelation: "species"
            referencedColumns: ["id"]
          },
        ]
      }
      journal: {
        Row: {
          cfs: string | null
          createdAt: string
          customPattern: string | null
          fishType: string | null
          hatch: string[] | null
          id: string
          images: Json[] | null
          location: Json | null
          locationName: string | null
          notes: string | null
          pattern: string | null
          photoBucketUrls: string[] | null
          userId: string | null
          waterTemp: string | null
          waterType: Database["public"]["Enums"]["water_type"] | null
          weather: Json | null
        }
        Insert: {
          cfs?: string | null
          createdAt?: string
          customPattern?: string | null
          fishType?: string | null
          hatch?: string[] | null
          id?: string
          images?: Json[] | null
          location?: Json | null
          locationName?: string | null
          notes?: string | null
          pattern?: string | null
          photoBucketUrls?: string[] | null
          userId?: string | null
          waterTemp?: string | null
          waterType?: Database["public"]["Enums"]["water_type"] | null
          weather?: Json | null
        }
        Update: {
          cfs?: string | null
          createdAt?: string
          customPattern?: string | null
          fishType?: string | null
          hatch?: string[] | null
          id?: string
          images?: Json[] | null
          location?: Json | null
          locationName?: string | null
          notes?: string | null
          pattern?: string | null
          photoBucketUrls?: string[] | null
          userId?: string | null
          waterTemp?: string | null
          waterType?: Database["public"]["Enums"]["water_type"] | null
          weather?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "public_journal_pattern_fkey"
            columns: ["pattern"]
            isOneToOne: false
            referencedRelation: "pattern"
            referencedColumns: ["label"]
          },
          {
            foreignKeyName: "public_journal_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
        ]
      }
      lifecycle: {
        Row: {
          description: string | null
          id: string
          name: string | null
          top1: string | null
          top2: string | null
          top3: string | null
        }
        Insert: {
          description?: string | null
          id: string
          name?: string | null
          top1?: string | null
          top2?: string | null
          top3?: string | null
        }
        Update: {
          description?: string | null
          id?: string
          name?: string | null
          top1?: string | null
          top2?: string | null
          top3?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lifecycle_top1_fkey"
            columns: ["top1"]
            isOneToOne: false
            referencedRelation: "pattern"
            referencedColumns: ["label"]
          },
          {
            foreignKeyName: "lifecycle_top2_fkey"
            columns: ["top2"]
            isOneToOne: false
            referencedRelation: "pattern"
            referencedColumns: ["label"]
          },
          {
            foreignKeyName: "lifecycle_top3_fkey"
            columns: ["top3"]
            isOneToOne: false
            referencedRelation: "pattern"
            referencedColumns: ["label"]
          },
        ]
      }
      mastering_the_art: {
        Row: {
          description: string | null
          id: number
          link: string | null
          thumbnail: string | null
          title: string | null
        }
        Insert: {
          description?: string | null
          id?: number
          link?: string | null
          thumbnail?: string | null
          title?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          link?: string | null
          thumbnail?: string | null
          title?: string | null
        }
        Relationships: []
      }
      online_store: {
        Row: {
          created_at: string
          id: number
          logo: string | null
          name: string
          website: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          logo?: string | null
          name: string
          website?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          logo?: string | null
          name?: string
          website?: string | null
        }
        Relationships: []
      }
      pattern: {
        Row: {
          alt_term: string | null
          alt1: string | null
          alt2: string | null
          alt3: string | null
          description: string | null
          label: string
          lifecycle: string | null
          name: string | null
          online_store: Json | null
          parent: string | null
          recipe: string | null
          species: string | null
          thumbnail: string | null
          tip: string | null
        }
        Insert: {
          alt_term?: string | null
          alt1?: string | null
          alt2?: string | null
          alt3?: string | null
          description?: string | null
          label: string
          lifecycle?: string | null
          name?: string | null
          online_store?: Json | null
          parent?: string | null
          recipe?: string | null
          species?: string | null
          thumbnail?: string | null
          tip?: string | null
        }
        Update: {
          alt_term?: string | null
          alt1?: string | null
          alt2?: string | null
          alt3?: string | null
          description?: string | null
          label?: string
          lifecycle?: string | null
          name?: string | null
          online_store?: Json | null
          parent?: string | null
          recipe?: string | null
          species?: string | null
          thumbnail?: string | null
          tip?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pattern_alt1_fkey"
            columns: ["alt1"]
            isOneToOne: false
            referencedRelation: "pattern"
            referencedColumns: ["label"]
          },
          {
            foreignKeyName: "pattern_alt2_fkey"
            columns: ["alt2"]
            isOneToOne: false
            referencedRelation: "pattern"
            referencedColumns: ["label"]
          },
          {
            foreignKeyName: "pattern_alt3_fkey"
            columns: ["alt3"]
            isOneToOne: false
            referencedRelation: "pattern"
            referencedColumns: ["label"]
          },
          {
            foreignKeyName: "pattern_lifecycle_fkey"
            columns: ["lifecycle"]
            isOneToOne: false
            referencedRelation: "lifecycle"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pattern_parent_fkey"
            columns: ["parent"]
            isOneToOne: false
            referencedRelation: "pattern"
            referencedColumns: ["label"]
          },
          {
            foreignKeyName: "pattern_species_fkey"
            columns: ["species"]
            isOneToOne: false
            referencedRelation: "species"
            referencedColumns: ["id"]
          },
        ]
      }
      pattern_of_month: {
        Row: {
          created_at: string
          id: number
          label: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          label?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          label?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pattern_of_month_label_fkey"
            columns: ["label"]
            isOneToOne: false
            referencedRelation: "pattern"
            referencedColumns: ["label"]
          },
        ]
      }
      rating: {
        Row: {
          created_at: string
          id: number
          pattern: string | null
          rating: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          pattern?: string | null
          rating?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          pattern?: string | null
          rating?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_rating_pattern_fkey"
            columns: ["pattern"]
            isOneToOne: false
            referencedRelation: "pattern"
            referencedColumns: ["label"]
          },
          {
            foreignKeyName: "public_rating_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      species: {
        Row: {
          description: string | null
          id: string
          isParent: boolean
          name: string | null
          parent: string | null
          search_terms: string | null
          thumbnail: string | null
          top1: string | null
          top2: string | null
          top3: string | null
          uuid: string | null
        }
        Insert: {
          description?: string | null
          id: string
          isParent?: boolean
          name?: string | null
          parent?: string | null
          search_terms?: string | null
          thumbnail?: string | null
          top1?: string | null
          top2?: string | null
          top3?: string | null
          uuid?: string | null
        }
        Update: {
          description?: string | null
          id?: string
          isParent?: boolean
          name?: string | null
          parent?: string | null
          search_terms?: string | null
          thumbnail?: string | null
          top1?: string | null
          top2?: string | null
          top3?: string | null
          uuid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "species_parent_fkey"
            columns: ["parent"]
            isOneToOne: false
            referencedRelation: "species"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "species_top1_fkey"
            columns: ["top1"]
            isOneToOne: false
            referencedRelation: "pattern"
            referencedColumns: ["label"]
          },
          {
            foreignKeyName: "species_top2_fkey"
            columns: ["top2"]
            isOneToOne: false
            referencedRelation: "pattern"
            referencedColumns: ["label"]
          },
          {
            foreignKeyName: "species_top3_fkey"
            columns: ["top3"]
            isOneToOne: false
            referencedRelation: "pattern"
            referencedColumns: ["label"]
          },
        ]
      }
      submitted_images: {
        Row: {
          bucket_id: string | null
          created_at: string
          id: string
          latLong: Json | null
          location: unknown | null
          pattern: string | null
          user_id: string
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string
          id?: string
          latLong?: Json | null
          location?: unknown | null
          pattern?: string | null
          user_id: string
        }
        Update: {
          bucket_id?: string | null
          created_at?: string
          id?: string
          latLong?: Json | null
          location?: unknown | null
          pattern?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "submitted_images_pattern_fkey"
            columns: ["pattern"]
            isOneToOne: false
            referencedRelation: "pattern"
            referencedColumns: ["label"]
          },
          {
            foreignKeyName: "submitted_images_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user: {
        Row: {
          active_subscription: string | null
          created_at: string
          email: string | null
          fontScale: boolean | null
          id: string
          imageCount: number | null
          lastLogin: string | null
          name: string | null
          partner_id: string | null
          seenAboutView: boolean | null
        }
        Insert: {
          active_subscription?: string | null
          created_at?: string
          email?: string | null
          fontScale?: boolean | null
          id: string
          imageCount?: number | null
          lastLogin?: string | null
          name?: string | null
          partner_id?: string | null
          seenAboutView?: boolean | null
        }
        Update: {
          active_subscription?: string | null
          created_at?: string
          email?: string | null
          fontScale?: boolean | null
          id?: string
          imageCount?: number | null
          lastLogin?: string | null
          name?: string | null
          partner_id?: string | null
          seenAboutView?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_favorites: {
        Row: {
          created_at: string
          id: string
          pattern: string | null
          userId: string
        }
        Insert: {
          created_at?: string
          id?: string
          pattern?: string | null
          userId: string
        }
        Update: {
          created_at?: string
          id?: string
          pattern?: string | null
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_favorites_pattern_fkey"
            columns: ["pattern"]
            isOneToOne: false
            referencedRelation: "pattern"
            referencedColumns: ["label"]
          },
          {
            foreignKeyName: "user_favorites_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      userRoles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["Roles"] | null
          userId: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["Roles"] | null
          userId?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["Roles"] | null
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "userRoles_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      fuzzy_search_patterns: {
        Args: {
          term: string
        }
        Returns: {
          name: string
          label: string
        }[]
      }
      fuzzy_search_patterns_by_name: {
        Args: {
          term: string
        }
        Returns: {
          name: string
          label: string
        }[]
      }
      fuzzy_search_patterns_by_name_ratings: {
        Args: {
          term: string
        }
        Returns: {
          name: string
          label: string
          similarity_rating: number
        }[]
      }
      fuzzy_search_patterns_by_name_with_value: {
        Args: {
          term: string
        }
        Returns: {
          name: string
          label: string
          similarity_value: number
        }[]
      }
      fuzzy_search_patterns_by_name2: {
        Args: {
          term: string
        }
        Returns: {
          pattern_name: string
          pattern_label: string
          similarity_value: number
        }[]
      }
      get_all_patterns_by_user: {
        Args: {
          user_id: string
        }
        Returns: {
          pattern: string
        }[]
      }
      get_all_tables_data: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_images_by_user: {
        Args: {
          p_user_id: string
        }
        Returns: {
          bucket_id: string | null
          created_at: string
          id: string
          latLong: Json | null
          location: unknown | null
          pattern: string | null
          user_id: string
        }[]
      }
      get_most_recent_pattern_by_user: {
        Args: {
          p_user_id: string
        }
        Returns: {
          pattern: string
          created_at: string
        }[]
      }
      get_patterns_within_distance: {
        Args: {
          lat: number
          long: number
          dist: number
        }
        Returns: {
          pattern: string
          dist_meters: number
          created_at: string
        }[]
      }
      get_top_10_patterns_by_user:
        | {
            Args: Record<PropertyKey, never>
            Returns: {
              pattern: string
            }[]
          }
        | {
            Args: {
              user_id: string
            }
            Returns: {
              pattern: string
              latest_created_at: string
            }[]
          }
      get_top_patterns_by_user: {
        Args: {
          user_id: string
          limit_count?: number
        }
        Returns: {
          pattern: string
        }[]
      }
      get_user_specific_data: {
        Args: {
          user_id: string
        }
        Returns: Json
      }
      gtrgm_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gtrgm_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gtrgm_options: {
        Args: {
          "": unknown
        }
        Returns: undefined
      }
      gtrgm_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      nearby_flies:
        | {
            Args: {
              lat: number
              long: number
            }
            Returns: {
              pattern: string
              dist_meters: number
            }[]
          }
        | {
            Args: {
              lat: number
              long: number
              dist: number
            }
            Returns: {
              pattern: string
              dist_meters: number
            }[]
          }
      nearby_flies_2: {
        Args: {
          lat: number
          long: number
          dist: number
        }
        Returns: {
          pattern: string
          dist_meters: number
          created_at: string
        }[]
      }
      nearby_flies2: {
        Args: {
          lat: number
          long: number
          dist: number
        }
        Returns: {
          pattern: string
          dist_meters: number
          created_at: string
        }[]
      }
      search_patterns: {
        Args: {
          term: string
        }
        Returns: {
          alt_term: string
          alt1: string
          alt2: string
          alt3: string
          description: string
          label: string
          lifecycle: string
          name: string
          online_store: Json
          parent: string
          recipe: string
          species: string
          thumbnail: string
          tip: string
        }[]
      }
      search_patterns2: {
        Args: {
          term: string
        }
        Returns: {
          name: string
          label: string
        }[]
      }
      search_patterns3: {
        Args: {
          term: string
        }
        Returns: {
          name: string
          label: string
        }[]
      }
      search_patterns4: {
        Args: {
          term: string
        }
        Returns: {
          name: string
          label: string
        }[]
      }
      search_patterns5: {
        Args: {
          term: string
        }
        Returns: {
          name: string
          label: string
        }[]
      }
      set_limit: {
        Args: {
          "": number
        }
        Returns: number
      }
      setrating: {
        Args: {
          in_pattern: string
          in_rating: number
          in_user_id: string
        }
        Returns: undefined
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: {
          "": string
        }
        Returns: string[]
      }
      trigram_fuzzy_search_patterns_by_name: {
        Args: {
          term: string
        }
        Returns: {
          name: string
          label: string
          similarity_value: number
        }[]
      }
      user_patterns: {
        Args: {
          user_id: string
        }
        Returns: {
          pattern: string
        }[]
      }
    }
    Enums: {
      Roles: "admin"
      water_type: "stillwater" | "river"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
